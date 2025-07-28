import { API_ENDPOINTS } from "@/constants/api";
import axios from "axios";
import { useEffect, useState } from "react";
import { keyBy } from "lodash"; 

// --- Definisi Tipe Data ---
type Member = {
    id: string;
    name: string;
    divisionId: string;
    majorId: string;
};

type Division = {
    id: string;
    name: string;
};

type Major = {
    id: string;
    name: string;
};

type MemberWithDetails = Member & {
  divisionName?: string;
  majorName?: string;
};

// --- Custom Hook ---
export const useMembersWithDetails = () => {
  const [members, setMembers] = useState<MemberWithDetails[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // ambil data member, division, dan major secara paralel menggunakan API
        const [membersRes, divisionsRes, majorsRes] = await Promise.all([
          axios.get<Member[]>(API_ENDPOINTS.MEMBER.INDEX), 
          axios.get<Division[]>(API_ENDPOINTS.DIVISION.INDEX),
          axios.get<Major[]>(API_ENDPOINTS.MAJOR.INDEX),
        ]);

        // Ubah array division menjadi objek map { id: Division }
        const divisionMap = keyBy(divisionsRes.data, "id");
        // Ubah array major menjadi objek map { id: Major }
        const majorMap = keyBy(majorsRes.data, "id");

        // PENTING: Gabungkan data member dengan nama divisinya dan majornya
        const enrichedMembers: MemberWithDetails[] = membersRes.data.map(member => ({
          ...member,
          divisionName: divisionMap[member.divisionId]?.name || "Divisi Tidak Diketahui",
          majorName: majorMap[member.majorId]?.name || "Jurusan Tidak Diketahui",
        }));

        // Simpan hasilnya ke dalam state
        setMembers(enrichedMembers);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Gagal mengambil data member, divisi, atau jurusan.";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { members, loading, error };
};
