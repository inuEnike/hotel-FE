import { IRoomResponse } from "@/app/(main)/admin/dashboard/utils/types";
import { Axios } from "@/lib/axios";

export const RoomService = {
  getRooms: async (): Promise<IRoomResponse> => {
    try {
      const data = await Axios.get("/rooms");
      return data.data;
    } catch (error) {
      throw error;
    }
  },
  getAvailableRooms: async (date: {
    checkIn: string;
    checkOut: string;
    page?: number;
    limit?: number;
  }): Promise<IRoomResponse> => {
    try {
      const response = await Axios.post("/booking/room-available", date);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  createRoom: async (data: any) => {
    const res = await Axios.post("/rooms", data);
    return res.data;
  },

  getRoomById: async (id: any) => {
    const res = await Axios.get(`/rooms/${id}`);
    return res.data;
  },
};
