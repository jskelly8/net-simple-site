using Microsoft.EntityFrameworkCore;
using BookshelfAPI.Models;

namespace BookshelfAPI.Data
{
    public class BookshelfContext : DbContext
    {
        public BookshelfContext(DbContextOptions<BookshelfContext> options) : base(options) { }

        public DbSet<Book> Books { get; set; }
    }
}