import { NextApiRequest, NextApiResponse } from 'next';

interface Json {
  [x: string]: string | number | boolean | Date | Json | JsonArray;
}

type JsonArray = Array<string | number | boolean | Date | Json | JsonArray>;

// todo: cleanup, add typings
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const status = await fetch('https://apt.procurs.us/dists/iphoneos-arm64/1600/main/binary-iphoneos-arm/Packages', {
    method: 'GET',
  });

  const data = (await status.text()).split('\n\n');
  const outputs = new Map<string, Json>();

  data.forEach((pkg) => {
    const fields = pkg.split(/\r?\n/);
    const fieldOutput: Json = {};

    fields.forEach((field) => {
      const fieldSplit = field.split(': ');
      fieldOutput[fieldSplit[0]] = fieldSplit[1];
    });

    if (!outputs.has(fieldOutput['Package'] as string)) {
      outputs.set(fieldOutput['Package'] as string, fieldOutput);
    }
  });

  res.status(200).json({ packages: Array.from(outputs.values()) });
};
