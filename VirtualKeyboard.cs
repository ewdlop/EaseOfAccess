namespace VirtualKeyboardApp
{
  using System;
  using System.Windows.Forms;

    public class VirtualKeyboard : Form
    {
        private TextBox textBox;

        public VirtualKeyboard()
        {
            // Initialize Form
            this.Text = "Virtual Keyboard";
            this.Size = new System.Drawing.Size(800, 600);

            // Initialize TextBox
            textBox = new TextBox
            {
                Location = new System.Drawing.Point(50, 50),
                Width = 700
            };
            this.Controls.Add(textBox);

            // Add Buttons for Letters
            char[] keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".ToCharArray();
            int x = 50, y = 100;

            foreach (char key in keys)
            {
                Button btn = CreateButton(key.ToString(), x, y);
                btn.Click += (sender, e) => textBox.Text += key;
                this.Controls.Add(btn);

                x += 50;
                if (x > 750)
                {
                    x = 50;
                    y += 50;
                }
            }

            // Add Buttons for Space and Backspace
            Button spaceBtn = CreateButton("Space", 50, y + 50);
            spaceBtn.Click += (sender, e) => textBox.Text += " ";
            this.Controls.Add(spaceBtn);

            Button backspaceBtn = CreateButton("Backspace", 150, y + 50);
            backspaceBtn.Click += (sender, e) =>
            {
                if (textBox.Text.Length > 0)
                {
                    textBox.Text = textBox.Text.Substring(0, textBox.Text.Length - 1);
                }
            };
            this.Controls.Add(backspaceBtn);
        }

        private Button CreateButton(string text, int x, int y)
        {
            return new Button
            {
                Text = text,
                Location = new System.Drawing.Point(x, y),
                Size = new System.Drawing.Size(45, 45)
            };
        }

        [STAThread]
        public static void Main()
        {
            Application.EnableVisualStyles();
            Application.Run(new VirtualKeyboard());
        }
    }
}
