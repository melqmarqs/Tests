using System;

public class TwoSumModel
{
  public int[] Nums { get; }
  public int Target { get; }

  public TwoSumModel(int[] _nums, int _target)
  {
    Nums = _nums;
    Target = _target;
  }
}

public class Program
{
  public static void Main()
  {
    var tests = new List<TwoSumModel>()
    {
      new TwoSumModel([2, 8, 11, 15, 7], 9),
      new TwoSumModel([11, 3, 5, 2, 15], 5),
      new TwoSumModel([3, 2, 4, 8, 9, 20, 13], 16),
      new TwoSumModel([2, 5, 0, 5], 10)
    };

    tests.ForEach(t =>
    {
      Console.WriteLine($"[{string.Join(", ", TwoSum(t.Nums, t.Target))}]");
    });
  }

  private static int[] TwoSum(int[] nums, int target)
  {
    var numToIndex = new Dictionary<int, int>();

    for (int i = 0; i < nums.Length; i++)
    {
      int complement = target - nums[i];

      if (numToIndex.TryGetValue(complement, out int x))
        return [x, i];

      numToIndex.Add(nums[i], i);
    }

    return [];
  }
}