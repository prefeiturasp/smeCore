using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace smeCore.SGP.Models.EducationalDepartment
{
    #region ==================== ATTRIBUTES ====================
    /// <summary>
    /// Modelos baseados na documentação do seguinte link https://github.com/victorwss/apis-sme/blob/master/API-escola.md
    /// acesso dia 03/04/2019, existe uma pequena diferença que foi alinhado, que na API, quando se puxar a DRE, virá também as escolas vinculadas a ela
    /// O Modelo EducationalDepartment é a DRE
    /// </summary>
    public class EducationalDepartment
    {
        public string EolCode { get; set; }
        public string Name { get; set; }
        public EducationalDepartmentStatus Status { get; set; }
        public DateTime UpdatedAt { get; set; }
        public DateTime? ExtinctedAt { get; set; }
        public List<School> Schools { get; set; }
    }
    /// <summary>
    /// Esse modelo representa a Escola ligada a uma DRE
    /// </summary>
    public class School
    {
        public string EolCode { get; set; }
        public string InepCode { get; set; }
        public string PapaCode { get; set; }
        public string CieCode { get; set; }
        public string Name { get; set; }
        public SchoolType Type { get; set; }
        public SchoolShift Shift { get; set; }
        public SchoolStatus Status { get; set; }
        public int Capacity { get; set; }
        public DateTime CreateddAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public DateTime? ExtinctedAt { get; set; }
        public EducationalDepartment EducationalDepartment { get; set; }
    }

    /// <summary>
    /// Tuno da escola:
    /// M - Manhã			Aula regular no período da manhã.
    /// I - Intermediário   Aula das 11:00 às 15:00.
    /// T - Tarde           Aula regular no período da tarde.
    /// V - Vespertino      Aula das 15:00 às 19:00.
    /// G - Integral        Aula de manhã e pela tarde.
    /// N - Noite           Aula regular no período da noite.
    /// </summary>
    public enum SchoolShift
    {
        M,
        I,
        T,
        V,
        G,
        N
    }

    /// <summary>
    /// Status da Escola
    /// O Created é quando a escola ainda não está em funcionamento
    /// </summary>
    public enum SchoolStatus
    {
        Created,
        Active,
        Extinct
    }

    /// <summary>
    /// Tipo de Escola:
    /// CCA	        - Centro para Crianças e Adolescentes
    /// CCI/CIPS	- Centro de Convivência Infantil / Centro Integrado de Proteção e Saúde
    /// CECI	    - Centro de Educação e Cultura Indígena
    /// CEI DIRET	- Centro de Educação Infantil Direto
    /// CEI INDIR	- Centro de Educação Infantil Indireto Conveniado
    /// CEMEI	    - Centro Municipal de Educação Infantil
    /// CEU	        - Centro Educacional Unificado
    /// CEU AT COM	- Unidade CEU para atendimento exclusivo de Atividades Complementares
    /// CEU CEI	    - Centro de Educação Infantil integrante de CEU
    /// CEU EMEF	- Escola Municipal de Ensino Fundamental integrante de CEU
    /// CEU EMEI	- Escola Municipal de Educação Infantil integrante de CEU
    /// CIEJA	    - Centro Integrado de Educação de Jovens e Adultos
    /// CMCT	    - Centro Municipal de Capacitação e Treinamento
    /// CR.P.CONV	- Creche Privada Conveniada
    /// DIR EDUC	- Diretoria Regional de Educação
    /// E TECNICA	- Escola Técnica
    /// EMEBS	    - Escola Municipal de Educação Bilíngue para Surdos
    /// EMEF	    - Escola Municipal de Ensino Fundamental
    /// EMEFM	    - Escola Municipal de Ensino Fundamental e Médio
    /// EMEI	    - Escola Municipal de Educação Infantil
    /// ESC.PART.	- Escola Particular
    /// ESP CONV	- Especial Conveniada
    /// MOVA	    - Movimento de Alfabetização de Jovens e Adultos
    /// OUT-PMSP	- Outras - Prefeitura Municipal de São Paulo
    /// </summary>
    public enum SchoolType
    {
        CCA,
        CCI_CIPS,
        CECI,
        CEI_DIRET,
        CEI_INDIR,
        CEMEI,
        CEU,
        CEU_AT_COMP,
        CEU_CEI,
        CEU_EMEF,
        CEU_EMEI,
        CIEJA,
        CMCT,
        CR_P_CONV,
        DIR_EDUC,
        E_TECNICA,
        EMEBS,
        EMEF,
        EMEFM,
        EMEI,
        ESC_PART,
        ESP_CONV,
        MOVA,
        OUT_PMSP
    }
    /// <summary>
    /// Status da DRE
    /// </summary>
    public enum EducationalDepartmentStatus
    {
        Active,
        Extinct
    }
    #endregion ==================== ATTRIBUTES ====================

    
}
