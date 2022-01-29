export class DateFormatter {
  public static formatDate(date: Date, format: string): string {
    let formatted = format;
    formatted = formatted.replace(/yyyy/g, String(date.getFullYear()));
    formatted = formatted.replace(
      /MM/g,
      ("0" + (date.getMonth() + 1)).slice(-2)
    );
    formatted = formatted.replace(/dd/g, ("0" + date.getDate()).slice(-2));
    formatted = formatted.replace(/HH/g, ("0" + date.getHours()).slice(-2));
    formatted = formatted.replace(/mm/g, ("0" + date.getMinutes()).slice(-2));
    formatted = formatted.replace(/ss/g, ("0" + date.getSeconds()).slice(-2));
    formatted = formatted.replace(
      /SSS/g,
      ("00" + date.getMilliseconds()).slice(-3)
    );
    return formatted;
  }
}
