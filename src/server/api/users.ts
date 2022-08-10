import { Client } from '@notionhq/client';

const getUsers = async () => {
    const notion = new Client({
        auth: process.env.NOTION_API_TOKEN,
    });
    return notion.users.list({});
};

export default defineEventHandler(async (event) => {
    const { results } = await getUsers();
    return results;
});
