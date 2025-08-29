import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_PATH = path.join(process.cwd(), "view-count.json");

function readCount() {
	try {
		if (!fs.existsSync(DATA_PATH)) {
			fs.writeFileSync(DATA_PATH, JSON.stringify({ count: 47 }, null, 2), "utf8");
			return 47;
		}
		const raw = fs.readFileSync(DATA_PATH, "utf8");
		const json = JSON.parse(raw || "{}");
		return Number.isFinite(json.count) ? json.count : 47;
	} catch {
		return 47;
	}
}

function writeCount(count) {
	try {
		fs.writeFileSync(DATA_PATH, JSON.stringify({ count }, null, 2), "utf8");
	} catch {
		// ignore write errors in read-only environments
	}
}

export async function GET() {
	const count = readCount();
	return NextResponse.json({ count });
}

export async function POST() {
	const current = readCount();
	const next = current + 1;
	writeCount(next);
	return NextResponse.json({ count: next });
}
