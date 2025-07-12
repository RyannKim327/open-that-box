upper = 1
lower = 2


def encrypt(text: str):
    result = []
    for i in range(len(text)):
        t = text[i]
        o = ord(t)

        if o in [j for j in range(65, (65 + 27))]:
            u = upper
        elif o in [j for j in range(97, (97 + 27))]:
            u = lower
        else:
            u = 3
        result.append(f"{o * (i + 1) + u}{u}")

    return "-".join(result)


def decrypt(text: str):
    texts = text.split("-")
    result = []

    for i in range(len(texts)):
        t = texts[i]
        u = t[len(t) - 1]
        x = t[: (len(t) - 1)]

        # if u == upper:
        n = int(x) // (i + 1)
        result.append(chr(n))

    return "".join(result)


print(encrypt("Hello World"))
print(decrypt("731-2042-3262-4342-5572-1953-6101-8902-10282-10822-11022"))
