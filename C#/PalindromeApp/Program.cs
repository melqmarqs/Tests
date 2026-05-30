using System.Text.RegularExpressions;

public class Program
{
  public static void Main()
  {
    var sentences = new List<string>() {
      "A man, a plan, a canal: Panama",
      "race a car",
      "Do geese see God?"
    };

    sentences.ForEach(s => Console.WriteLine($"{s} {IsPalindrome(s)}"));
  }

  private static bool IsPalindrome(string phrase)
  {
    if (string.IsNullOrEmpty(phrase))
      return false;

    int left = 0, right = phrase.Length - 1;

    while (left < right)
    {
      while (left < right && !char.IsLetterOrDigit(phrase[left])) left++;
      while (left < right && !char.IsLetterOrDigit(phrase[right])) right--;

      if (char.ToLowerInvariant(phrase[left]) != char.ToLowerInvariant(phrase[right]))
        return false;

      left++;
      right--;
    }

    return true;
  }
}