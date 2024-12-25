using System;
using System.Runtime.InteropServices;
using System.Threading;
using System.Windows.Forms;

class Program
{
    static void Main()
    {
        // Simulate a key press for the letter 'A'
        SendKeys.SendWait("A");

        // Wait for the key press to be processed
        Thread.Sleep(100);
    }

}
