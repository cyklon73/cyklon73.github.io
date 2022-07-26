package de.cyklon.gds.DAapi.token;

import java.security.SecureRandom;
import java.util.Date;

public class TokenGenerator {

    public static void main(String[] args) {
        System.out.println(generateToken(70));
    }


    public static String generateToken(int length) {
        String token = "";
        int maxId = CharSet.getMaxId();
        for (int i = 0; i < length; i++) {
            token += CharSet.get(randInt(0, maxId)).getChar();
        }
        return token;
    }


    private static int randInt(int min, int max) {
        SecureRandom rand = new SecureRandom();
        rand.setSeed(new Date().getTime());
        return rand.nextInt((max - min) + 1) + min;
    }
}
