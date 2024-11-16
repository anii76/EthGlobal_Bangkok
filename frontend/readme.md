# App frontend

## Local certificate

#### Create the certificate

```bash
# Install mkcert
brew install mkcert

# Install root certificate
mkcert -install

# Create certificate for localhost
mkcert dev.kinto.xyz localhost 127.0.0.1 ::1
```

You should see something like this

```
The certificate is at "./dev.kinto.xyz+3.pem" and the key at "./dev.kinto.xyz+3-key.pem" ✅
```

#### Set up local DNS

Open the hosts file

```bash
sudo nano /etc/hosts
```

Add the following line and save the file

```
127.0.0.1       dev.kinto.xyz
```
