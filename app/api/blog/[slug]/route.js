import { NextResponse } from 'next/server';
import { getPostBySlug } from '../../../../src/lib/markdown.js';

export async function GET(request, { params }) {
  try {
    const { slug } = params;
    const post = await getPostBySlug(slug);

    if (!post) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog post' },
      { status: 500 }
    );
  }
}
