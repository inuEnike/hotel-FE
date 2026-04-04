import { IHotelResponse } from "@/app/(main)/admin/dashboard/utils/types";
import { Axios } from "@/lib/axios";

export const HotelService = {
  getHotel: async (): Promise<IHotelResponse> => {
    try {
      const res = await Axios.get("/hotel");
      return res.data;
    } catch (error) {
      throw error;
    }
  },
  create: async (data: any) => {
    const res = await Axios.post("/hotel", data);
    return res.data;
  },  
};
