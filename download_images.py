import urllib.request
import os

images = {
    "hero.jpg": "https://images.unsplash.com/photo-1542385262-cdf06b2bb12b?q=80&w=1920",
    "about.jpg": "https://images.unsplash.com/photo-1590497519129-28c0b5e43a9b?q=80&w=800",
    "ship1.jpg": "https://images.unsplash.com/photo-1586528116311-ad8ed7c83a7f?q=80&w=800",
    "shipyard.jpg": "https://images.unsplash.com/photo-1507914972138-c67be8470557?q=80&w=800",
    "drydock.jpg": "https://images.unsplash.com/photo-1601625807986-e803c6218179?q=80&w=800",
    "cargo.jpg": "https://images.unsplash.com/photo-1589311311005-7768fb3a0c10?q=80&w=800",
    "tanker.jpg": "https://images.unsplash.com/photo-1616035222956-65be797fc7de?q=80&w=800",
    "marine.jpg": "https://images.unsplash.com/photo-1541819582236-410a56f6cde4?q=80&w=800",
    "facility1.jpg": "https://images.unsplash.com/photo-1565439387609-b7880d7d06e2?q=80&w=800",
    "facility2.jpg": "https://images.unsplash.com/photo-1517594422361-5e1f0bb6d933?q=80&w=800",
    "facility3.jpg": "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=800",
    "facility4.jpg": "https://images.unsplash.com/photo-1621905252472-8889980d924d?q=80&w=800",
    "facility5.jpg": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800"
}

os.makedirs('assets/images', exist_ok=True)

opener = urllib.request.build_opener()
opener.addheaders = [('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36')]
urllib.request.install_opener(opener)

for name, url in images.items():
    print(f"Downloading {name}...")
    try:
        urllib.request.urlretrieve(url, f"assets/images/{name}")
    except Exception as e:
        print(f"Failed {name}: {e}")
