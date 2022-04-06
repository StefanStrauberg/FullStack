using API.Dtos;
using AutoMapper;
using Core.Entities;

namespace API.Helpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Product, ProductToReturnDto>()
                .ForMember(dist => dist.ProductBrand,
                    opt => opt.MapFrom(src => src.ProductBrand.Name))
                .ForMember(dist => dist.ProductType,
                    opt => opt.MapFrom(src => src.ProductType.Name));
        }
    }
}