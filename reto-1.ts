function translatePossessed(message: string): string {
    if (message.trim() == "") return "";

    let response = message.split(" ").map((word) => Array.from(word).reverse().join(""));

    return response.join(" ");
}


translatePossessed('olleH 👋');