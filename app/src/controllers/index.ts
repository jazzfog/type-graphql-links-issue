import { Request, Response } from 'express';

export async function index(_: Request, res: Response) {
	res.send('Index');
}

