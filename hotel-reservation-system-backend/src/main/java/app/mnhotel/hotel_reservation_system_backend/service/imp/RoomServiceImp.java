package app.mnhotel.hotel_reservation_system_backend.service.imp;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import app.mnhotel.hotel_reservation_system_backend.dto.RoomDTO;
import app.mnhotel.hotel_reservation_system_backend.entity.Hotel;
import app.mnhotel.hotel_reservation_system_backend.entity.Room;
import app.mnhotel.hotel_reservation_system_backend.repository.HotelRepository;
import app.mnhotel.hotel_reservation_system_backend.repository.RoomRepository;
import app.mnhotel.hotel_reservation_system_backend.response.ApiResponse;
import app.mnhotel.hotel_reservation_system_backend.service.RoomService;

@Service
public class RoomServiceImp implements RoomService{

	@Autowired
	private RoomRepository roomRepository;
	@Autowired
	private HotelRepository hotelRepository;
	
	// Convertir de entidad a DTO
	private RoomDTO convertEntityToDTO(Room room) {
	    if (room == null) {
	        return null;
	    }

	    return RoomDTO.builder()
	            .id(room.getId())
	            .roomNumber(room.getRoomNumber())
	            .type(room.getType())
	            .pricePerNight(room.getPricePerNight())
	            .availability(room.getAvailbility())
	            .hotelId(room.getHotel() != null ? room.getHotel().getId() : null) // Asignar hotelId si el hotel no es nulo
	            .build();
	}

	// Convertir de DTO a entidad
	private Room convertDTOToEntity(RoomDTO roomDTO, Hotel hotel) {
	    if (roomDTO == null) {
	        return null;
	    }

	    Room room = new Room();
	    room.setId(roomDTO.getId());
	    room.setRoomNumber(roomDTO.getRoomNumber());
	    room.setType(roomDTO.getType());
	    room.setPricePerNight(roomDTO.getPricePerNight());
	    room.setAvailbility(roomDTO.getAvailability());
	    //room.setHotel(hotel); // Asignar el hotel asociado

	    return room;
	}


	@Override
	public void createRoom(RoomDTO roomRequest) throws Exception {
		// TODO Auto-generated method stub
		try {	

	 		Room room = new Room();
		 		room.setId(roomRequest.getId());
		 	    room.setRoomNumber(roomRequest.getRoomNumber());
		 	    room.setType(roomRequest.getType());
		 	    room.setPricePerNight(roomRequest.getPricePerNight());
		 	    room.setAvailbility(roomRequest.getAvailability());
		 	    // Convertir hotelId a un objeto Hotel
		        if (roomRequest.getHotelId() != null) {
		            Hotel hotel = hotelRepository.findById(roomRequest.getHotelId())
		                .orElseThrow(() -> new Exception("Room not found"));
		            room.setHotel(hotel);
		        } 

		 	   roomRepository.save(room);
	 		
		} catch (Exception e) {
	        throw new Exception(e.getMessage());
	    }
	}

	@Override
	public void deleteRoom(Long id) throws Exception {
		// TODO Auto-generated method stub
		 Room room = roomRepository.findById(id)
		            .orElseThrow(() -> new Exception("Room no encontrado"));
			
		 roomRepository.deleteById(id);	
	}

	@Override
	public ApiResponse updateRoomData(RoomDTO roomRequest) throws Exception {
		// TODO Auto-generated method stub
				Room room = roomRepository.findById(roomRequest.getId())
			            .orElseThrow(() -> new Exception("Room no encontrado"));
				 
			    // Actualización de campos del producto
				room.setRoomNumber(roomRequest.getRoomNumber());
		 	    room.setType(roomRequest.getType());
		 	    room.setPricePerNight(roomRequest.getPricePerNight());
		 	    room.setAvailbility(roomRequest.getAvailability());
				
				roomRepository.save(room);
				
			    return new ApiResponse("El Room se actualizó satisfactoriamente");
	}

	@Override
	public Optional<RoomDTO> getRoom(Long id) throws Exception {
		// TODO Auto-generated method stub
		return roomRepository.findById(id)
		        .map(this::convertEntityToDTO);
	}

	@Override
	public List<RoomDTO> getAllRoom() throws Exception {
		// TODO Auto-generated method stub
		return roomRepository.findAll().stream()
		        .map(this::convertEntityToDTO)
		        .collect(Collectors.toList());
	}

}
