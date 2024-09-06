using Microsoft.EntityFrameworkCore;
using BookshelfAPI.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Configure Entity Framework to use SQLite
builder.Services.AddDbContext<BookshelfContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));

// Enabling CORS to allow the React front-end
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy =>
        {
            // Allow the React app running on localhost:3000 (development)
            policy.WithOrigins("http://localhost:3000")  // Update this with your front-end domain after deployment
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseCors("AllowReactApp");

// HTTPS redirection -- commented out for debugging
// app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
