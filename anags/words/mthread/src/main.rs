
fn main() {
    let mut mstr = String::new();

    std::io::stdin().read_line(&mut mstr)
        .ok()
        .expect("err");

    println!("Input string: {}", mstr);
}
