import UIKit

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Any additional setup after loading the view.
    }

    @IBAction func callEmergency(_ sender: UIButton) {
        let emergencyNumber = "911"
        if let url = URL(string: "tel://\(emergencyNumber)"), UIApplication.shared.canOpenURL(url) {
            UIApplication.shared.open(url, options: [:], completionHandler: nil)
        } else {
            // Show an alert if the device can't make calls
            let alert = UIAlertController(title: "Error", message: "Your device cannot make calls.", preferredStyle: .alert)
            alert.addAction(UIAlertAction(title: "OK", style: .default, handler: nil))
            self.present(alert, animated: true, completion: nil)
        }
    }
}
