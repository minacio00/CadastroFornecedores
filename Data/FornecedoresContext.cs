using CadastroFornecedores.Models;
using Microsoft.EntityFrameworkCore;

namespace CadastroFornecedores.Data
{
    public class FornecedoresContext : DbContext
    {
        public FornecedoresContext(DbContextOptions<FornecedoresContext> options) : base(options)
        {
            
        }
        public DbSet<Fornecedor> Fornecedores { get; set; }
    }
}
