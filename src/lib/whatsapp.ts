export function generateWhatsAppLink(
  noHp: string,
  namaTamu: string,
  namaMempelai: string,
  linkUndangan: string
): string {
  // Format nomor hp ke 62xxx
  let cleanNo = noHp.replace(/\D/g, '');
  if (cleanNo.startsWith('0')) {
    cleanNo = '62' + cleanNo.slice(1);
  }

  const pesan = `Kepada Yth. Bapak/Ibu/Saudara/i *${namaTamu}*\n\nTanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami (${namaMempelai}).\n\nDetail undangan dapat diakses melalui tautan berikut:\n${linkUndangan}?to=${encodeURIComponent(
    namaTamu
  )}\n\nMerupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.\n\nTerima kasih.`;

  return `https://wa.me/${cleanNo}?text=${encodeURIComponent(pesan)}`;
}
