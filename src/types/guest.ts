export interface Tamu {
  id: string;
  invitationId: string;
  nama: string;
  kategori?: string; // e.g., "Keluarga", "Teman Kantor", "VIP"
  noWhatsapp?: string;
  linkUndangan: string;
  statusKehadiran?: 'HADIR' | 'RAGU' | 'TIDAK_HADIR';
  jumlahHadir?: number;
  ucapan?: string;
  createdAt: string;
}

export interface RSVPPayload {
  tamuId?: string;
  invitationId: string;
  nama: string;
  statusKehadiran: 'HADIR' | 'RAGU' | 'TIDAK_HADIR';
  jumlahHadir: number;
  ucapan: string;
}
