import {uploadNewArticle} from '../../lib/db';
import { IArticle } from '../../common/types/Article.d';

export async function POST(request: Request) {
    let data: IArticle = await request.json();
    uploadNewArticle(data.title, data.image, data.author, data.category, data.body);

    console.log(request.json());

    return new Response();
}