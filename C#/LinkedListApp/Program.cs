public class Program
{
  public static void Main()
  {
    var options = new int[] { 10, 20, 30, 40, 50, 60 };
    var linkedList = new MyLinkedList();
    foreach (var x in options) { linkedList.Append(x); }
    try
    {
      Console.WriteLine(linkedList.FindTheMiddle());
    }
    catch (Exception e)
    {
      Console.WriteLine(e.Message);
    }
  }
}

class Node<T>
{
  public T Value { get; set; }
  public Node<T>? Next { get; set; }

  public Node(T value)
  {
    Value = value;
    Next = null;
  }
}

class MyLinkedList
{
  private Node<int>? Nodes { get; set; }

  public MyLinkedList()
  {
    Nodes = null;
  }

  public void Append(int value)
  {
    var newNode = new Node<int>(value);

    if (Nodes is null)
    {
      Nodes = newNode;
      return;
    }

    var current = Nodes;
    while (current.Next is not null) current = current.Next;

    current.Next = newNode;
  }

  public int? FindTheMiddle()
  {
    if (Nodes is null)
      throw new InvalidOperationException("Linked List is empty");

    var slow = Nodes;
    var fast = Nodes;

    while (slow is not null && fast is not null && fast.Next is not null)
    {
      slow = slow.Next;
      fast = fast.Next.Next;
    }

    return slow is null ? null : slow.Value;
  }
}