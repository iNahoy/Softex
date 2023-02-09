import javax.jws.WebMethod;
import javax.jws.WebService;
import javax.xml.ws.Endpoint;

@WebService
public class Calculator {
    @WebMethod
    public int add(int a, int b) {
        return a + b;
    }
    @WebMethod
    public int subtract(int a, int b) {
        return a - b;
    }
    @WebMethod
    public int multiply(int a, int b) {
        return a * b;
    }
    @WebMethod
    public int divide(int a, int b) {
        return a / b;
    }
}

public class Main {
    public static void main(String[] args) {
        Endpoint.publish("http://localhost:8080/calculator", new Calculator());
        System.out.println("Servidor SOAP iniciado na porta 8080");
    }
}
