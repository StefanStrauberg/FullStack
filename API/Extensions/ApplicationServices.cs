using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions
{
    public static class ApplicationServices
    {
        public static IServiceCollection AddApplicationServices(
            this IServiceCollection services,
            IConfiguration config)
        {
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlite(config.GetConnectionString("DefaultConnection")));
            return services;
        }
    }
}