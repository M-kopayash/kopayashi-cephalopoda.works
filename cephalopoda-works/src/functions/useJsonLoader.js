// // @ts-check

// /**
//  * ファイルを読み込み、JSON データを返す関数
//  * @param {string} filename - 読み込むファイル名
//  * @returns {Promise<any>} - 読み込んだ JSON データの Promise
//  */export async function loadJsonFile(filename: string) {
//     try {
//       const response = await fetch(filename);
//       if (response.ok) {
//         const data = await response.json();
//         return data;
//       } else {
//         throw new Error('Failed to load JSON file');
//       }
//     } catch (error) {
//       console.error('Error loading JSON file:', error);
//       throw error;
//     }
//   }