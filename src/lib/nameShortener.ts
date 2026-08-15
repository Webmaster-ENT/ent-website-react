/**
 * Fungsi untuk menyederhanakan nama panjang menjadi maksimal 2 kata panjang
 * dengan kata pertama dan kedua utuh, sisanya disingkat
 * @param fullName - Nama lengkap yang akan disingkat
 * @returns Nama yang sudah disingkat
 */
export const shortenName = (fullName: string): string => {
  if (!fullName) return '';
  
  // Hapus spasi ekstra dan pecah menjadi kata-kata
  const words = fullName.trim().split(/\s+/);
  
  // Jika nama sudah pendek (1-2 kata), kembalikan aslinya
  if (words.length <= 2) {
    return fullName;
  }
  
  // Untuk nama dengan 3 kata atau lebih
  if (words.length === 3) {
    // Ambil kata pertama dan kedua utuh, kata ketiga disingkat
    return `${words[0]} ${words[1]} ${words[2][0].toUpperCase()}.`;
  }
  
  // Untuk nama dengan 4 kata atau lebih
  // Ambil kata pertama dan kedua utuh, sisanya disingkat
  const firstTwoWords = words.slice(0, 2).join(' ');
  const abbreviatedRest = words.slice(2).map(word => word[0].toUpperCase() + '.').join(' ');
  
  return `${firstTwoWords} ${abbreviatedRest}`.trim();
};

/**
 * Versi alternatif: lebih ringkas untuk member card
 * Hanya ambil 2 kata pertama, sisanya disingkat menjadi inisial
 * Juga singkat kata yang lebih dari 10 huruf
 */
export const shortenNameForMemberCard = (fullName: string): string => {
  if (!fullName) return '';
  
  const words = fullName.trim().split(/\s+/);
  
  // Cek apakah ada kata yang lebih dari 10 huruf
  const hasLongWord = words.some(word => word.length > 10);
  
  // Jika hanya 1-2 kata dan tidak ada kata panjang, kembalikan aslinya
  if (words.length <= 2 && !hasLongWord) {
    return fullName;
  }
  
  // Proses penyingkatan kata panjang
  const processedWords = words.map(word => {
    // Singkat kata yang lebih dari 10 huruf
    if (word.length > 10) {
      return word.substring(0, 8) + '...';
    }
    return word;
  });
  
  // Jika masih lebih dari 2 kata setelah penyingkatan kata panjang
  if (processedWords.length > 2) {
    // Ambil 2 kata pertama
    const firstTwo = processedWords.slice(0, 2).join(' ');
    
    // Singkatkan sisanya menjadi inisial
    const initials = processedWords.slice(2).map(word => word[0].toUpperCase()).join('');
    
    return initials ? `${firstTwo} ${initials}.` : firstTwo;
  }
  
  return processedWords.join(' ');
};

/**
 * Versi super ringkas: hanya 2 kata pertama
 */
export const shortenNameUltra = (fullName: string): string => {
  if (!fullName) return '';
  
  const words = fullName.trim().split(/\s+/);
  
  if (words.length <= 2) {
    return fullName;
  }
  
  // Hanya ambil 2 kata pertama
  return words.slice(0, 2).join(' ');
};

/**
 * Fungsi lama untuk backward compatibility
 */
export const shortenNameV2 = shortenName;
export const shortenNameSmart = shortenName;
