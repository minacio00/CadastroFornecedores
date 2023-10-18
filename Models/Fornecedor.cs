using System.ComponentModel.DataAnnotations;

namespace CadastroFornecedores.Models
{
    public class Fornecedor
    {
        [Key]
        [Required]
        public int Id { get; set; }

        [Required (ErrorMessage ="Insira um nome")]
        [StringLength(100)]
        public string Nome { get; set; }

        [Required(ErrorMessage = "Informe um valor para o Cnpj")]
        [RegularExpression(@"^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$", ErrorMessage = "Formato de CNPJ inválido. Use XX.XXX.XXX/XXXX-XX")]
        public string Cnpj { get; set; }

        [Required(ErrorMessage ="Escolha um valor para especialidade")]
        public Especialidade Especialidade { get; set; }

        [Required(ErrorMessage ="Insira um CEP")]
        [RegularExpression(@"^\d{8}$", ErrorMessage = "CEP deve conter 8 dígitos")]
        public string Cep { get; set; }

        [Required(ErrorMessage ="Insira um endereco")]
        [StringLength(255)]
        public string Endereco { get; set; }

    }

    public enum Especialidade
    {
        Comercio,
        Servico,
        Industria
    }
}
