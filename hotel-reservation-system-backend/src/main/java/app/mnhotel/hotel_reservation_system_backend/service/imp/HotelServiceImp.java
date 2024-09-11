package app.mnhotel.hotel_reservation_system_backend.service.imp;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import app.mnhotel.hotel_reservation_system_backend.dto.HotelDTO;
import app.mnhotel.hotel_reservation_system_backend.entity.Hotel;
import app.mnhotel.hotel_reservation_system_backend.repository.HotelRepository;
import app.mnhotel.hotel_reservation_system_backend.response.ApiResponse;
import app.mnhotel.hotel_reservation_system_backend.service.HotelService;

@Service
public class HotelServiceImp implements HotelService{
	@Autowired
	private HotelRepository hotelRepository;
	
	// Convertir de entidad a DTO
    private HotelDTO convertEntityToDTO(Hotel hotel) {
        if (hotel == null) {
            return null;
        }

        return HotelDTO.builder()
                .id(hotel.getId())
                .name(hotel.getName())
                .location(hotel.getLocation())
                .description(hotel.getDescription())
                .rating(hotel.getRating())
                .image(hotel.getImage())
                .province(hotel.getProvince())
                .rating(hotel.getRating())
                /*.roomIds(hotel.getRooms() != null 
                    ? hotel.getRooms().stream().map(Room::getId).collect(Collectors.toList()) 
                    : null)
                .reviews(hotel.getReviews() != null 
                    ? hotel.getReviews().stream().map(convertEntityToDTOReview).collect(Collectors.toList()) 
                    : null)*/
                .build();
    }
    // Convertir de DTO a entidad
    private Hotel convertDTOToEntity(HotelDTO hotelDTO) {
        if (hotelDTO == null) {
            return null;
        }

        Hotel hotel = new Hotel();
        hotel.setId(hotelDTO.getId());
        hotel.setName(hotelDTO.getName());
        hotel.setLocation(hotelDTO.getLocation());
        hotel.setDescription(hotelDTO.getDescription());
        hotel.setRating(hotelDTO.getRating());
        hotel.setImage(hotelDTO.getImage());
        hotel.setProvince(hotelDTO.getProvince());

        // Omitimos las relaciones (rooms y reviews) para simplificar
        // Podrías agregar lógica adicional para asignar estos valores si es necesario

        return hotel;
    }
	@Override
	public void createHotel(HotelDTO hotelRequest) throws Exception {
		// TODO Auto-generated method stub
		try {	

		 		Hotel hotel = new Hotel();
		 		hotel.setId(hotelRequest.getId());
		 		hotel.setName(hotelRequest.getName());
		 		hotel.setLocation(hotelRequest.getLocation());
		 		hotel.setDescription(hotelRequest.getDescription());
		 		hotel.setRating(hotelRequest.getRating());
		 		hotel.setImage(hotelRequest.getImage());
		 		hotel.setProvince(hotelRequest.getProvince());
			    hotelRepository.save(hotel);
		 		
			} catch (Exception e) {
		        throw new Exception(e.getMessage());
		    }
	}
    

	@Override
	public List<HotelDTO> getAllHotel() throws Exception {
		// TODO Auto-generated method stub
		 return hotelRepository.findAll().stream()
			        .map(this::convertEntityToDTO)
			        .collect(Collectors.toList());
	}

	@Override
	public Optional<HotelDTO> getHotel(Long id) throws Exception{
		// TODO Auto-generated method stub
		return hotelRepository.findById(id)
		        .map(this::convertEntityToDTO);
	}
	/**
	 * Elimina un hotel del sistema basado en su ID.
	 *
	 * @param id El ID del hotel que se desea eliminar.
	 * @throws EntityNotFoundException si no se encuentra el hotel con el ID proporcionado.
	 */
	@Override
	public void deleteHotel(Long id) throws Exception {
		// TODO Auto-generated method stub
	     Hotel hotel = hotelRepository.findById(id)
			            .orElseThrow(() -> new Exception("Hotel no encontrado"));
				
	     hotelRepository.deleteById(id);	
	}
	@Override
	public ApiResponse updateHotelData(HotelDTO hotelRequest) throws Exception {
		// TODO Auto-generated method stub
		Hotel hotel = hotelRepository.findById(hotelRequest.getId())
	            .orElseThrow(() -> new Exception("Hotel no encontrado"));
		 
	    // Actualización de campos del producto
		hotel.setName(hotelRequest.getName());
		hotel.setLocation(hotelRequest.getLocation());
		hotel.setDescription(hotelRequest.getDescription());
		hotel.setRating(hotelRequest.getRating());
		hotel.setImage(hotelRequest.getImage());
 		hotel.setProvince(hotelRequest.getProvince());
 		
		hotelRepository.save(hotel);
		
	    return new ApiResponse("El Hotel se actualizó satisfactoriamente");
	}


	
}
