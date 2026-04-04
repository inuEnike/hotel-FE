export interface IRoomCapacity {
  adult: number;
  children: number;
  maxOccupancy: number;
}

export interface IRoom {
  _id: string; // MongoDB unique identifier
  hotelId: string; // Reference to the Hotel
  roomCode: string; // e.g., "RM101"
  roomType: string; // e.g., "Single", "Deluxe"
  capacity: IRoomCapacity; // Nested object
  basePrice: number; // e.g., 12000
  bedSetup: string[]; // Array of strings
  images: string[]; // Array of image URLs
  isActive: boolean; // Status toggle
  desc: string; // Room description
  createdAt?: string; // Optional: if you use timestamps
  updatedAt?: string; // Optional: if you use timestamps
}

export interface IRoomResponse {
  success: boolean;
  total?: number;
  data: IRoom[];
}

export interface IHotelResponse {
  success: boolean;
  total?: number;
  data: IHotel[];
}

export interface IHotel {
  _id: string;

  name: string;
  address: string;
  city: string;
  country: string;

  desc?: string;

  rating?: number; // e.g. 4.5
  amenities?: string[]; // ["WiFi", "Pool", "Parking"]

  images?: string[];

  isActive?: boolean;

  createdAt?: string;
  updatedAt?: string;
}
