export interface CurrentTime {
  week_number: number;
  utc_offset: string;
  utc_datetime: string;
  unixtime: number;
  timezone: string;
  raw_offset: number;
  dst_until: string;
  dst_offset: number;
  dst_from: string;
  dst: boolean;
  day_of_year: number;
  day_of_week: number;
  datetime: string;
  client_ip: string;
  abbreviation: string;
}
