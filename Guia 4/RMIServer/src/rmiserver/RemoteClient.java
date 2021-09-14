package rmiserver;

import java.rmi.NotBoundException;
import java.rmi.RemoteException;
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;

public class RemoteClient {

    public static void main (String [] args) throws RemoteException {
        RemoteI remote;
        try{
            Registry registry = LocateRegistry.getRegistry(5000);
            remote = (RemoteI) registry.lookup("rmi://localhost/ABC");
            int result = remote.add(15,11);
            System.out.println(remote.saludar("Miguel"));
            System.out.println("Result is: "+result);
        } catch (NotBoundException | RemoteException e){
            System.out.println("Client exception: "+e);
        }
    }

}
