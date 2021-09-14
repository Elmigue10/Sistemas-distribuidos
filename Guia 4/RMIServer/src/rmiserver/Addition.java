package rmiserver;

import java.rmi.RemoteException;
import java.rmi.server.UnicastRemoteObject;

public class Addition extends UnicastRemoteObject implements AdditionInterface {

    public Addition() throws RemoteException {}

    @Override
    public int add(int a, int b) throws RemoteException {
        int result = a + b;
        return result;
    }
}
