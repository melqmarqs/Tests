class Program
{
  static void Main()
  {
    var bs = new BinarySearch();
    bs.SetArr([4, 5, 6, 7, 8, 9, 2]);

    int result = bs.FindPivot();
    Console.WriteLine($"Pivot index: {result}");
    Console.WriteLine($"Pivot value: {bs.GetArr()[result]}");
  }
}

class BinarySearch
{
  private int[] arr;

  public BinarySearch() { this.arr = []; }

  public void SetArr(int[] arr) { this.arr = arr; }

  public int[] GetArr() { return this.arr; }

  public int FindPivot()
  {
    int left = 0, right = this.arr.Length - 1, mid;
    while (left <= right)
    {
      mid = (left + right) / 2;
      if (this.arr[mid] <= right)
      {
        right = --mid;
      }
      else
      {
        left = ++mid;
      }
    }

    return left;
  }
}