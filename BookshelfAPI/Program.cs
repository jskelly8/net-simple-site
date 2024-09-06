using Microsoft.EntityFrameworkCore;
using BookshelfAPI.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Configure Entity Framework to use SQLite
builder.Services.AddDbContext<BookshelfContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

// HTTPS redirection -- commented out for debugging
// app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
