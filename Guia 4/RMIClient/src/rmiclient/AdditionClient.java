package rmiclient;

import java.rmi.NotBoundException;
import java.rmi.RemoteException;
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;

public class AdditionClient {

    public static void main (String [] args) throws RemoteException {
        AdditionInterface additionInterface;
        try{
            Registry registry = LocateRegistry.getRegistry("localhost",5000);
            additionInterface = (AdditionInterface) registry.lookup("rmi://localhost/ABC");
            int result = additionInterface.add(9,10);
            System.out.println("Result is: "+result);
        } catch (NotBoundException | RemoteException e){
            System.out.println("Client exception: "+e);
        }
    }

}
