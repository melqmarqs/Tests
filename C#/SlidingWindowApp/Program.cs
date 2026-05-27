using System;

public class SlidingWindow
{
  private int[] arr;

  public SlidingWindow(int[] arr)
  {
    this.arr = arr;
  }

  public int FindLargestSum(int interval = 2)
  {
    int windowSum = 0;

    if (arr.Length <= 0 || arr.Length < interval)
      return 0;

    for (int i = 0; i < interval; i++)
    {
      windowSum += arr[i];
    }

    int largest = windowSum;

    for (int right = interval; right < arr.Length; right++)
    {
      int left = right - interval;
      windowSum -= arr[left];
      windowSum += arr[right];
      largest = Math.Max(largest, windowSum);
    }

    return largest;
  }
}

public class Program
{
  public static void Main()
  {
    SlidingWindow sw = new SlidingWindow(new int[] { 9, 3, 5, 19, 1, 20, 3, 2 });
    Console.WriteLine(sw.FindLargestSum(3));
  }
}