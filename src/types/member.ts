export type Member = {
    id: string;
    name: string;
    photo: string;
    major_id: string;
    phone: string;
    email: string;
    gen_id: string;
    status: "active" | "graduated";
    birth_date: string;
    division_id: string;
    subdivision_id: string;
    published_at: string;
};

export type Division = {
    id: string;
    name: string;
};

export type Major = {
    id: string;
    name: string;
};

export type Gen = {
    id: string;
    gen: string;
};

export type MemberWithDetails = Member & {
  divisionName?: string;
  majorName?: string;
  genName?: string;
};
