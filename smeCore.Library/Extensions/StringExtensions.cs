using System;

namespace smeCore.Library.Extensions
{
    public static class StringExtensions
    {
        /// <summary>
        /// Método para extrair atributos de uma página html (raw) pela propriedade 'name'. Só funciona se a propriedade 'name' estiver antes do 'value'.
        /// </summary>
        /// <param name="source">Fonte do html (raw)</param>
        /// <param name="name">Nome do atributo desejado</param>
        /// <returns>Valor (value) do atributo desejado</returns>
        public static string ExtractDataByName(this string source, string name)
        {
            int startIndex = source.IndexOf(string.Format("name=\"{0}\"", name));
            string delimiter = "\"";

            if (startIndex < 0)
            {
                startIndex = source.IndexOf(string.Format("name='{0}'", name));
                delimiter = "'";

                if (startIndex < 0)
                    return (string.Empty);
            }

            int firstIndex = source.IndexOf("value=" + delimiter, startIndex) + 7;
            int lastIndex = source.IndexOf(">", startIndex);
            string data = source.Substring(firstIndex, lastIndex - firstIndex - 3);

            return data;
        }

        public static string Clean(this string originalString, string[] parameters)
        {
            foreach (string character in parameters)
                originalString = originalString.Replace(character, string.Empty);

            return originalString;
        }

        public static bool IsNotNull(this string value)
        {
            return !string.IsNullOrEmpty(value) && !string.IsNullOrWhiteSpace(value);
        }

        public static bool IsEqualsTo(this string source, string target)
        {
            return string.Equals(source, 
                                target, 
                                StringComparison.InvariantCultureIgnoreCase
                                );
        }
    }
}
