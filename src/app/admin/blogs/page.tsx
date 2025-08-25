import { PrismaClient, Blog, BlogStatus } from '@/generated/prisma';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { format } from 'date-fns';
import ActionButtons from './ActionButtons';

const prisma = new PrismaClient();

async function getBlogs() {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return blogs;
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
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
                </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
