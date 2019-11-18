package sunoye.accounting.web;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountingController {
    @RequestMapping("/")
    String home() {
        return "Hello World!";
    }
}
