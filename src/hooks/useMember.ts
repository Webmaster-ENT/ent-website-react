import { useEffect, useState } from "react";
import { keyBy } from "lodash"; 
import API from "@/lib/api";
import type { Member, Division, Major, Gen, MemberWithDetails } from "@/types/member";

// --- Custom Hook ---
export const useMembersWithDetails = () => {
  const [members, setMembers] = useState<MemberWithDetails[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // ambil data member, division, dan major secara paralel menggunakan API
        const [membersRes, divisionsRes, majorsRes, genRes] = await Promise.all([
          API.get<{ data: Member[] }>("/members"),
          API.get<{ data: Division[] }>("/division"),
          API.get<{ data: Major[] }>("/major"),
          API.get<{ data: Gen[] }>("/gen")
        ]);

        // Ubah array division menjadi objek map { id: Division }
        const divisionMap = keyBy(divisionsRes.data.data, "id");

        // Ubah array major menjadi objek map { id: Major }
        const majorMap = keyBy(majorsRes.data.data, "id");

        // Ubah array gen menjadi objek map { id: Gen }
        const genMap = keyBy(genRes.data.data, "id");

        // PENTING: Gabungkan data member dengan nama divisinya dan majornya
        const enrichedMembers: MemberWithDetails[] = membersRes.data.data.map((member: Member) => ({
          ...member,
          divisionName: divisionMap[member.division_id]?.name || "Divisi Tidak Diketahui",
          majorName: majorMap[member.major_id]?.name || "Jurusan Tidak Diketahui",
          genName: genMap[member.gen_id]?.gen || "Generasi Tidak Diketahui",
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
