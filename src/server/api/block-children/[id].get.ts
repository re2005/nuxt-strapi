import { Client } from '@notionhq/client';

export default defineEventHandler((event) => {
    const notion = new Client(
        { auth: process.env.NOTION_API_TOKEN },
    );

    return notion.blocks.children.list({
        block_id: event.context.params.id,
    });
});
