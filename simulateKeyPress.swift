import UIKit

class ViewController: UIViewController {
    override func viewDidLoad() {
        super.viewDidLoad()

        // Simulate key press for "a"
        KeyPressSimulator.simulateKeyPress(key: "a")
    }
}
