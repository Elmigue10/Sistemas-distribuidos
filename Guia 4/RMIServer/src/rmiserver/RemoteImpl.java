package rmiserver;

import java.rmi.RemoteException;
import java.rmi.server.UnicastRemoteObject;

public class RemoteImpl extends UnicastRemoteObject implements RemoteI {

    public RemoteImpl() throws RemoteException {}

    @Override
    public int add(int a, int b) throws RemoteException {
        int result = a + b;
        return result;
    }

    @Override
    public String saludar(String nombre) throws RemoteException {
        return "Hola "+ nombre + ", esto es RMI!";
    }
}
