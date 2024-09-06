using System;
using System.ComponentModel.DataAnnotations;

namespace BookshelfAPI.Models
{
    public class Book
    {
        public int BookId { get; set; }

        [Required]
        [StringLength(100)]
        public string? Title { get; set; }

        [StringLength(100)]
        public string? Author { get; set; }

        [StringLength(13)]
        public string? ISBN { get; set; }

        [DataType(DataType.Date)]
        public DateTime PublishedDate { get; set; }

        [StringLength(50)]
        public string? Genre { get; set; }
    }
}
