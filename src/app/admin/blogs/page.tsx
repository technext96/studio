import { prisma } from '@/lib/prisma';
import { Prisma, type Blog, type BlogStatus } from '@/generated/prisma';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { format } from 'date-fns';
import ActionButtons from './ActionButtons';

async function getBlogs(): Promise<Blog[]> {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return blogs;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2021') {
      console.warn("The 'Blog' table does not exist. Please run database migrations.");
      return [];
    }
     if (error instanceof Prisma.PrismaClientInitializationError) {
      console.warn("Could not connect to the database. Please check your DATABASE_URL.", error.message);
      return [];
    }
    console.error("Failed to fetch blogs:", error);
    // In case of other errors, we still return an empty array to avoid crashing the page.
    return [];
  }
}

function getStatusVariant(status: BlogStatus) {
    switch (status) {
        case 'PUBLISHED': return 'default';
        case 'APPROVED': return 'default';
        case 'PENDING': return 'secondary';
        case 'REJECTED': return 'destructive';
        default: return 'outline';
    }
}

export default async function AdminBlogsPage() {
  const blogs = await getBlogs();

  return (
    <div className="py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Blog Management</CardTitle>
            <CardDescription>Approve, reject, publish, and feature blog posts.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border rounded-lg w-full">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Featured</TableHead>
                    <TableHead>Created At</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {blogs.map((blog) => (
                    <TableRow key={blog.id}>
                      <TableCell className="font-medium">{blog.title}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(blog.status)}>{blog.status}</Badge>
                      </TableCell>
                       <TableCell>
                        {blog.featured ? <Badge>Yes</Badge> : <Badge variant="secondary">No</Badge>}
                      </TableCell>
                      <TableCell>{format(new Date(blog.createdAt), 'MMM d, yyyy')}</TableCell>
                      <TableCell className="text-right">
                        <ActionButtons blog={blog} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            {blogs.length === 0 && (
                <div className="text-center py-12 text-muted-foreground">
                    <p>No blog posts found.</p>
                    <p className="text-xs mt-2">Please ensure your database is connected and you have run the necessary migrations.</p>
                </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
